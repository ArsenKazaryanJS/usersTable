export const useDeleteUser = (dispatch) => {
 
    const handleDelete = async (id) =>{

        const res = await fetch(`http://localhost:3001/users/${id}`, {
          method:"DELETE",
          headers:{  "Content-Type": "application/json",}
        })
        if(res.ok) {
          dispatch({type:'DELETE_USER', payload:id})
        }
    
      }

      return {handleDelete}
}
