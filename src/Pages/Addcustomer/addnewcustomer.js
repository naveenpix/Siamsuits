import React from 'react'
import "./addcustomer.css"
import Step1 from "./Step1"
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'


export default function Addnewcustomer() {
  return (
      <>    
   <div class="container-fluid" id="grad1">
    <div class="row justify-content-center mt-0">
        <div class="col-md-12 m-auto text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2><strong>Add New</strong></h2>
                <p>Fill all form field to go to next step</p>
                <div class="row">
                    <div class="col-md-12 mx-0">
                        <form id="msform">

                            <ul id="progressbar">
                                <li class="active" id="account"><strong>Account</strong></li>
                                <li id="personal"><strong>Personal</strong></li>
                                <li id="payment"><strong>Payment</strong></li>
                                <li id="confirm"><strong>Finish</strong></li>
                            </ul> 

                           <Step1 />

                           <Step2 />

                           <Step3 /> 

                          <Step4 />
                            
                            

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </>
  )
}

