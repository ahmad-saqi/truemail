import { useEffect, useState } from "react";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Info, Loader2, Volleyball, X } from "lucide-react";
import { toast } from "sonner";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import CustomToast from "@/components/ui/custom-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useDeleteItemMutation,
  useFetchItemQuery,
  useFetchItemsQuery,
  usePostItemMutation,
  useUpdateItemMutation,
} from "@/store/services/item";

const Dashboard = () => {
  const { getIdToken } = useKindeAuth();
  const [name, setName] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [addItem, { isLoading: adding }] = usePostItemMutation();
  const [editItem, { isLoading: editing }] = useUpdateItemMutation();
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [deleteItem, { isLoading: deleting }] = useDeleteItemMutation();

  const { data: item } = useFetchItemQuery(
    {
      id: `${selected}`,
      token: `${accessToken}`,
    },
    {
      skip: !selected || selected === 0 || !accessToken,
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: items, isLoading } = useFetchItemsQuery(`${accessToken}`, {
    skip: !accessToken,
    refetchOnMountOrArgChange: true,
  });

  const clearForm = () => {
    setName("");
    setSelected(0);
    setDescription("");
  };

  const handleToken = async () => {
    let token: string | undefined = "";
    token = await getIdToken();

    setAccessToken(token);
  };

  const handleSubmit = async () => {
    let response = null;
    if (selected || selected !== 0) {
      response = await editItem({
        id: `${selected}`,
        token: `${accessToken}`,
        body: { name, description },
      });
    } else {
      response = await addItem({
        token: `${accessToken}`,
        body: { name, description },
      });
    }

    if (!response.error) {
      toast.custom(() => (
        <CustomToast
          type="success"
          title="Success!"
          description={`Item ${selected ? "Edited" : "Added"} Successfully`}
        />
      ));

      clearForm();
    } else {
      toast.custom(() => (
        <CustomToast
          type="error"
          title="Error!"
          description="Something went wrong!"
        />
      ));
    }
  };

  const handleDelete = async (id: string) => {
    const response = await deleteItem({
      id,
      token: `${accessToken}`,
    });

    if (!response.error) {
      toast.custom(() => (
        <CustomToast
          type="success"
          title="Success!"
          description="Item Deleted Successfully"
        />
      ));
    } else {
      toast.custom(() => (
        <CustomToast
          type="error"
          title="Error!"
          description="Something went wrong!"
        />
      ));
    }
  };

  useEffect(() => {
    handleToken();

    if (item) {
      setName(item.name);
      setDescription(item.description);
    }
  }, [item, getIdToken]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <MaxWidthWrapper>
        <div className="grid h-full w-full grid-cols-2 divide-x divide-primary rounded-xl bg-muted">
          {isLoading ? (
            <div className="col-span-1 flex h-full w-full items-center justify-center gap-2.5 overflow-y-auto p-5">
              <Volleyball className="animate-bounce" />
            </div>
          ) : (
            <div className="col-span-1 flex h-fit w-full flex-wrap items-start justify-start gap-2.5 overflow-y-auto p-5">
              <div className="flex w-full items-center justify-center">
                <span className="flex-1 text-left text-xl font-semibold">
                  Phones Available
                </span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Click the Chip to Edit, Click the 'X' in the Chip to
                      Delete.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              {items?.map((item) => (
                <div
                  key={item.id}
                  className="flex w-fit items-center justify-center gap-5 rounded-full bg-background py-1 pl-5 pr-1.5"
                >
                  <span
                    onClick={() => setSelected(item.id)}
                    className="flex-1 cursor-pointer text-left"
                  >
                    {item.name}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    disabled={deleting}
                    className="rounded-full"
                    onClick={() => handleDelete(`${item.id}`)}
                  >
                    {deleting ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      <X className="size-5 text-destructive" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="col-span-1 flex w-full flex-col items-start justify-start gap-5 p-5"
          >
            <h1 className="w-full text-left text-xl font-bold">
              {selected ? "Edit" : "Add"} Phone
            </h1>
            <div className="flex w-full flex-col items-center justify-center gap-1.5">
              <Label htmlFor="name" className="w-full text-left text-xs">
                Name
              </Label>
              <Input
                required
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Phone Name"
                className="w-full bg-background"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1.5">
              <Label htmlFor="description" className="w-full text-left text-xs">
                Description
              </Label>
              <textarea
                id="description"
                placeholder="Enter Phone Description"
                rows={10}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full resize-none rounded-lg bg-background p-2.5 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <div className="flex w-full items-center justify-end">
              <Button
                disabled={adding || editing}
                type="submit"
                variant="default"
                size="lg"
              >
                {adding || editing ? (
                  <div className="flex w-full items-center justify-center gap-2">
                    <Loader2 className="size-5 animate-spin" />
                    <span>Please Wait...</span>
                  </div>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Dashboard;
