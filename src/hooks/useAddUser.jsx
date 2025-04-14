
export const useAddUser = (dispatch,totalPagesCount) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const [firstname, lastname, address] = e.target;
        let formData = {
          id: Date.now().toString(),
          firstname: firstname.value,
          lastname: lastname.value,
          address: address.value,
          date: new Date().toLocaleDateString() 
        };

        const res = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if(res.ok){
          e.target.reset()
          const newUser = await res.json()
         dispatch({type:'ADD_USER',payload:newUser})
         dispatch({type:"SET_CURRENT_PAGE",payload: totalPagesCount})

        }
      };

      return {handleSubmit}
}

