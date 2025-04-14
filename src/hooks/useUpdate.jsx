
export const useUpdate = (dispatch,user,allUsers) => {

  const handleSetUser = (updatedUser) => {
    dispatch({ type: "USER", payload: updatedUser });
    dispatch({ type: "SET_POPUP", payload: true });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const [name, lastName, address] = e.target;
    let obj = {
      firstname: name.value,
      lastname: lastName.value,
      address: address.value,
      date:user.date
    };
    const res = await fetch(`http://localhost:3001/users/${user.id}`,{
      method:'PUT',
      headers:{ 'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const updatedData = await res.json();
    console.log('Data updated successfully:', updatedData);
    dispatch({type:"UPDATE_USER", payload:updatedData})
    dispatch({type:"SET_POPUP", payload:false})

  };

  return { handleSetUser,handleUpdate };
};
