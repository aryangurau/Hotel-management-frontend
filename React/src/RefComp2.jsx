import { useRef } from "react";
import Button from 'react-bootstrap/Button';

const RefComp2 = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const rawFormData = formRef.current;
    const formData = new FormData(rawFormData);
    //checking form data
    for (const pair of formData.entries()) {
      console.log(pair);
    }
  };
  //if we are controlling our form using id or reference rather than state we call that form:uncontrolled form
  return (
    <div>
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="enter email" name="email" />
      <input placeholder="enter password" name="password" />

      <Button variant="primary" type="submit">Submit</Button>
     
      </form>
    </div>
  );
};

export default RefComp2;
