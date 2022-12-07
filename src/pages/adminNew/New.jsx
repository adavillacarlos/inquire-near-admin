import "./new.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import { useState } from "react";
import {doc,serverTimestamp,setDoc} from "firebase/firestore";
import { auth, db } from "../../app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const New = ({ inputs }) => { 
  const [data, setData] = useState({});
  const navigate = useNavigate()

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  console.log(data);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "admins", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Title title="Add New Admin" />
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleAdd}>
            {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <div className="formInput"></div>
              <button type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
