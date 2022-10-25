import React, { useState, useEffect } from "react";
import "./signup.css";
import { TiTick } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
const Signup = () => {
  const [step, setstep] = useState(1);
  const [animate, setanimate] = useState({
    first: { backgroundColor: "white" },
    second: { backgroundColor: "white" },
    third: { backgroundColor: "white" },
    fourth: { backgroundColor: "white" },
    fifth: { backgroundColor: "white" },
    sixth: { backgroundColor: "white" },
  });
  const [bcolor, setbcolor] = useState({
    first: { backgroundColor: "white" },
    second: { backgroundColor: "white" },
    third: { backgroundColor: "white" },
    fourth: { backgroundColor: "white" },
  });

  const [display, setdisplay] = useState({
    first: { display: "flex" },
    second: { display: "none" },
    third: { display: "none" },
    fourth: { display: "none" },
  });

  const [color, setcolor] = useState({
    first: { color: "white" },
    second: { color: "black" },
    third: { color: "black" },
    fourth: { color: "black" },
  });
  useEffect(() => {
    switch (step) {
      case 1:
        setbcolor({
          first: { backgroundColor: "#5a4ad1" },
          second: { backgroundColor: "white" },
          third: { backgroundColor: "white" },
          fourth: { backgroundColor: "white" },
        });

        break;
      case 2:
        setbcolor({
          first: { backgroundColor: "#5a4ad1" },
          second: { backgroundColor: "#5a4ad1" },
          third: { backgroundColor: "white" },
          fourth: { backgroundColor: "white" },
        });
        setanimate({
          first: { backgroundColor: "#5a4ad1" },
          second: { backgroundColor: "#5a4ad1" },
          third: { backgroundColor: "#5a4ad1" },
          fourth: { backgroundColor: "white" },
          fifth: { backgroundColor: "white" },
          sixth: { backgroundColor: "white" },
        });
        setdisplay({
          first: { display: "none" },
          second: { display: "flex" },
          third: { display: "none" },
          fourth: { display: "none" },
        });
        setcolor({
          first: { color: "white" },
          second: { color: "white" },
          third: { color: "black" },
          fourth: { color: "black" },
        });
        break;
      case 3:
        setbcolor({
          first: { backgroundColor: "#5a4ad1" },
          second: { backgroundColor: "#5a4ad1" },
          third: { backgroundColor: "#5a4ad1" },
          fourth: { backgroundColor: "white" },
        });
        setanimate({
          first: { backgroundColor: "#5a4ad1" },
          second: { backgroundColor: "#5a4ad1" },
          third: { backgroundColor: "#5a4ad1" },
          fourth: { backgroundColor: "#5a4ad1" },
          fifth: { backgroundColor: "#5a4ad1" },
          sixth: { backgroundColor: "white" },
        });
        setdisplay({
          first: { display: "none" },
          second: { display: "none" },
          third: { display: "flex" },
          fourth: { display: "none" },
        });
        setcolor({
          first: { color: "white" },
          second: { color: "white" },
          third: { color: "white" },
          fourth: { color: "black" },
        });
        break;
      case 4:
        setbcolor({
          first: { backgroundColor: "#5a4ad1" },
          second: { backgroundColor: "#5a4ad1" },
          third: { backgroundColor: "#5a4ad1" },
          fourth: { backgroundColor: "#5a4ad1" },
        });
        setanimate({
          first: { backgroundColor: "#5a4ad1" },
          second: { backgroundColor: "#5a4ad1" },
          third: { backgroundColor: "#5a4ad1" },
          fourth: { backgroundColor: "#5a4ad1" },
          fifth: { backgroundColor: "#5a4ad1" },
          sixth: { backgroundColor: "#5a4ad1" },
        });
        setdisplay({
          first: { display: "none" },
          second: { display: "none" },
          third: { display: "none" },
          fourth: { display: "flex" },
        });
        setcolor({
          first: { color: "white" },
          second: { color: "white" },
          third: { color: "white" },
          fourth: { color: "white" },
        });
        break;
      default:
        setbcolor({
          first: { backgroundColor: "white" },
          second: { backgroundColor: "white" },
          third: { backgroundColor: "white" },
        });
        break;
    }
  }, [step]);

  const fcw = () => {
    setstep(step + 1);
  };
  return (
    <div className='signup'>
      <div className='u-signup'>
        <div className='logo'>logo</div>
        <ul class='progress_bar'>
          <li style={bcolor.first} className='fnum'>
            <h5 style={color.first}>1</h5>
          </li>
          <div style={animate.first} className='fline'></div>
          <div style={animate.second} className='sline'></div>
          <li style={bcolor.second} className='snum'>
            <h5 style={color.second}>2</h5>
          </li>
          <div style={animate.third} className='tline'></div>
          <div style={animate.fourth} className='lline'></div>
          <li style={bcolor.third} className='tnum'>
            <h5 style={color.third}>3</h5>
          </li>
          <div style={animate.fifth} className='tline'></div>
          <div style={animate.sixth} className='lline'></div>
          <li style={bcolor.fourth} className='tnum'>
            <h5 style={color.fourth}>4</h5>
          </li>
        </ul>
        <div style={display.first} className='firstphase phase'>
          <div className='s-welcome'>
            <h3>Welcome! First things first...</h3>
            <h5>You can always change them later.</h5>
          </div>
          <div className='s-inputfield'>
            <div>
              <label htmlFor='fname'>Full Name</label>
              <input type='text' name='fname' id='' placeholder='Steve Jobs' />
            </div>
            <div>
              <label htmlFor='fname'>Display Name</label>
              <input type='text' name='dname' id='' placeholder='Steve' />
            </div>
          </div>
          <div className='s-workspacebtn'>
            <button onClick={fcw}>Create Workspace</button>
          </div>
        </div>
        <div style={display.second} className='secondphase phase'>
          <div className='s-welcome'>
            <h3>Let's setup a home for all your work</h3>
            <h5>You can always workspace later.</h5>
          </div>
          <div className='s-inputfield'>
            <div>
              <label htmlFor='fname'>Workspace Name</label>
              <input type='text' name='wsname' id='' placeholder='Eden' />
            </div>
            <div>
              <label htmlFor='fname'>Workspace URL(optional)</label>
              <input type='text' name='dname' id='' placeholder='Steve' />
            </div>
          </div>
          <div className='s-workspacebtn'>
            <button onClick={fcw}>Create Workspace</button>
          </div>
        </div>
        <div style={display.third} className='thirdphase phase'>
          <div className='s-welcome'>
            <h3>How are you planning to use Eden?</h3>
            <h5>We will streaming your setup experience accordingly.</h5>
          </div>
          <div className='s-checkbox'>
            <div class='col-md-4 col-lg-4 col-sm-4'>
              <label>
                <input type='radio' name='product' class='card-input-element' />

                <div class='panel panel-default card-input'>
                  <div class='panel-heading'>
                    <HiUserGroup size={20} />
                  </div>
                  <h4>With my team</h4>
                  <div class='panel-body'>
                    Wikis,docs,tasks & Projects , all in one place
                  </div>
                </div>
              </label>
            </div>
            <div class='col-md-4 col-lg-4 col-sm-4'>
              <label>
                <input type='radio' name='product' class='card-input-element' />

                <div class='panel panel-default card-input'>
                  <div class='panel-heading'>
                    <FaUserAlt size={20} />
                  </div>
                  <h4>For Myself</h4>
                  <div class='panel-body'>
                    Write better. Think more clearly.stay organized
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className='s-workspacebtn'>
            <button onClick={fcw}>Create Workspace</button>
          </div>
        </div>
        <div style={display.fourth} className='fourthphase phase'>
          <div className='tick'>
            <TiTick color='white' />
          </div>
          <div className='s-welcome'>
            <h3>Congratulations,Eren!</h3>
            <h5>You have completed the onboarding,you can start using Eden!</h5>
          </div>

          <div className='s-workspacebtn'>
            <button>Launch Eden</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
