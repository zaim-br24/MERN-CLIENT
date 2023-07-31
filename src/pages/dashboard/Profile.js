import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/Styles/ProfileWrapper'
import { Alert, FormRow } from '../../components/index'

export default function Profile() {
  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext()
  console.log("from profile:",  user)
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  const [isEditProfile, setEditProfile] = useState(false)

  const toggleEditProfile = ()=>{
    setEditProfile(!isEditProfile)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      // test and remove temporary
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })   
   
    
  }
  return (
    <Wrapper className='nasted-box'>
      <div className='profile-container'>
          <div className='glass-background box profile'>
          <div className='user-profile'>

            <div className='user-profile-container'>

              <div className='user-image'></div>

              <div className='user-info'>
                <p className='user-name'>{name}</p>
                <p className='personal-account'>(Your personal account)</p>
              </div>
            </div>
            <button type='click' className='profile-btns edit-btn' onClick={toggleEditProfile}>{!isEditProfile?"Edit Profile": "Disorder Edit"} </button>
          </div>

          <div className='user-friends'>
                <p className='user-profile-title'>My Friends</p>
                <Link><span>Followers </span> <span>2,512</span></Link>
                <Link><span>Following</span> <span>512</span></Link>
          </div>

          <div className='user-skills'>
                <p className='user-profile-title'>My Skills</p>
                <div className='skills'>
                  <div><span></span> compute science</div>
                  <div><span></span> frontend</div>
                  <div><span></span> football</div>
                  <div><span></span> game dev</div>
                </div>
          </div>
          </div>

          <div className='glass-background box activities'>
              activities
          </div>

          <div className='glass-background box budget'>
              budget
          </div>
          <div className='glass-background box statistics'>
              statistics
          </div>
          <div className='glass-background box posts'>
              posts
          </div>
      </div>

        {/* Update profile */}

      {isEditProfile && 
      <div className='glass-background update-profile'>
      <form className='form' onSubmit={handleSubmit}>
      <h3> Edite Profile </h3>
      {showAlert && <Alert />}

      {/* name */}
      <div className='form-center'>
        <FormRow
          type='text'
          name='name'
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormRow
          labelText='last name'
          type='text'
          name='lastName'
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />
        <FormRow
          type='email'
          name='email'
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />

        <FormRow
          type='text'
          name='location'
          value={location}
          handleChange={(e) => setLocation(e.target.value)}
        />
        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading ? 'Please Wait...' : 'save changes'}
        </button>
      </div>
    </form>
    </div>
      }        

    </Wrapper>
  )
}
