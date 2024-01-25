import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, isUserLogin, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGpt);
  // const isLogin=useSelector((store)=> store.user.isLogin)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    //event listner
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // when header component unloads it will unsubscribe this event means on auth will not be called
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    console.log("clicked");
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44 " src={LOGO} alt="logo" />
      <div className="flex p-2">
        { user && showGpt && (<select
          className="p-2 m-2 bg-gray-900 text-white "
          onClick={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>)}
         {user && <button 
          className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
           { showGpt? "HomePage":"GPT Search"}
        </button>}
        <img className="w-12 h-12 " alt="usericon" src={user?.photoURL} />
        {user && <button onClick={handleSignOut} className="font-bold text-white">
          SignOut
        </button>}
        
      </div>
    </div>
  );
};

export default Header;
