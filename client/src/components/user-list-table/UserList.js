import { UserItem } from "./UserItem"
import { useState, useEffect } from "react"
import { addUser, deleteUser, editUser, getAllData, getOneUser } from "../../services/userService";
import { UserDetails } from "./UserDetails";
import { UserEdit } from "./UserEdit";
import { UserAdd } from "./UserAdd";
import { UserDelete } from "./UserDelete";

export const UserList = (props) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [page, setPage] = useState("all")

  useEffect(() => {
    getAllData()
      .then(users => setUsers(users))
  }, [page])

  const clickHandler = (userId, page) => {
    getOneUser(userId)
      .then(data => {
        setUser(data.user)
        setPage(`${page}`)
      }
      )
  }

  const closeHandler = () => {
    setPage(`all`)
  }

  const addAndEditHandler = (e, userId, action) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      ...address
    } = Object.fromEntries(formData);

    const userData = {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      address
    }
    if (action === 'edit') {
      editUser(userId, userData)
      setPage(`all`)
    }
    if (action === "add") {
      addUser(userData)
      setPage(`all`)
    }

  }
  const onDeleteUser = (userId) => {
    deleteUser(userId)
    setPage(`all`)
  }

  const createHandler = (userData) => {
    const result = addUser(userData)
      .then(setPage(`all`))
  }

  return (
    <>
      <div className="table-wrapper">

        {page === "details" && <UserDetails user={user} onClose={closeHandler} />}
        {page === "delete" && <UserDelete user={user} onClose={closeHandler} onDelete={onDeleteUser} />}
        {page === "edit" && <UserEdit user={user} onClose={closeHandler} onEdit={addAndEditHandler} />}
        {page === "add" && <UserAdd onClose={closeHandler} onCreate={createHandler} />}

        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Table row component --> */}
            {users.map(user => <UserItem key={user._id} user={user} clickHandler={clickHandler} />)}

          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={() => setPage(`add`)}>Add new user</button>
    </>
  )
}