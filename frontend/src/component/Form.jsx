import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Form() {
  const nameRef = useRef(null);
  const emailrRef = useRef(null);
  const placeRef = useRef(null);
  const NumoftravellerRef = useRef(null);
  const BudgetRef = useRef(null);
  const [Total, setTotal] = useState(0);

  useEffect(() => {});

  function handlesumbit(e) {
    // setLoad(true)
    let obj = {
      name: nameRef.current.value,
      email: emailrRef.current.value,
      place: placeRef.current.value,
      NumofTraveller: NumoftravellerRef.current.value,
      PerPersonBudget: BudgetRef.current.value,
      total: Total,
    };
    console.log(obj);
    axios.post(`https://tiny-skirt-moth.cyclic.app/`, obj).then((res) => {
      console.log(res.data);
      // setLoad(false)
    });

    alert("done");
  }

  return (
    <div className="container">
      <img
        src="https://www.worldoffemale.com/wp-content/uploads/2018/07/Fotolia_66178955_Subscription_Monthly_M1.jpg"
        alt=""
        srcset=""
      />
      <form className="form" onSubmit={handlesumbit}>
        <label>Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name "
          ref={nameRef}
          required
        />
        <label>Email : </label>
        <input
          type="email"
          id="Email"
          placeholder="Enter Your Email "
          ref={emailrRef}
          required
        />

        <label>Where do you want to go? </label>
        <select id="place" ref={placeRef} required>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </select>

        <label>No. of travellers </label>
        <input
          type="number"
          name="traveller"
          ref={NumoftravellerRef}
          required
          placeholder="No. of travellers"
        />
        <label>Budget Per Person</label>
        <input
          type="number"
          name="traveller"
          ref={BudgetRef}
          onChange={(e) => {
            setTotal(e.target.value * NumoftravellerRef.current.value);
          }}
          required
          placeholder="No. of travellers"
        />
        <div>Total Amount :$ {Total}</div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
