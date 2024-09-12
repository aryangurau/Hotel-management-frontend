import { useUserContextHook } from "../context/User";
const CompA = () => {
  const { user, setUser, changeEmail } = useUserContextHook();

  return (
    <span style={{ border: "1px solid red" }}>
      <div>CompA</div>
      {user?.name} <br />
      {user?.email} <br />
      <input
        onChange={(e) =>
          setUser((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
        placeholder="change the name"
      />
      <br />
      <button onClick={changeEmail}>EMail</button>
    </span>
  );
};

export default CompA;
