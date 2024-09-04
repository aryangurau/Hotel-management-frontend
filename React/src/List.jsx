const List = ({ users }) => {
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

            {users.map((user, index) => {
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
