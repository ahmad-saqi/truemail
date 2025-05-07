import Navbar from "../components/navbar"
import ProfileForm from "../components/profileForm"


const ProfilePage = () => {
  return (
    <div>
    <Navbar/>
    <div className="bg-gray-100">
    <ProfileForm/>
    </div>
    
    </div>
  )
}

export default ProfilePage