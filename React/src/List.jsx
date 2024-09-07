const List = ({ users }) => {
  let user = users.filter((a)=>a.name.startsWith("a"))
  return (
    <div>
      <ol>
        {users.length > 0 ? (
          <table>
            <tr>
              <th>S.N</th>
              <th>Names</th>
              <th>Action</th>
            </tr>

            {user.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td><button>Edit</button> <button>Delete</button></td>
                </tr>
              );
            })}
          </table>
        ) : (
          <tr colSpan={2}> user not found</tr>
        )}
      </ol>

      
    </div>
  );
};

export default List;
