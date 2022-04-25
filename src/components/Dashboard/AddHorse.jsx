import React from 'react'
import NavBar from './Sidebar'
function AddHorse() {
  return (
    <React.Fragment>
    <NavBar

/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card">
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2">Horse Form</h3>
              <form action="">

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="text" id="firstName" class="form-control" />
                      <label class="form-label" for="firstName">Horse Name</label>
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="text" id="lastName" class="form-control" />
                      <label class="form-label" for="lastName">Owner Name</label>
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline datepicker">
                      <input
                        type="text"
                        class="form-control"
                        id="birthdayDate"
                      />
                      <label for="birthdayDate" class="form-label">Birthday</label>
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <h6 class="mb-2 pb-1">Gender: </h6>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        value="option1"
                      />
                      <label class="form-check-label" for="femaleGender">Female</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        value="option2"
                      />
                      <label class="form-check-label" for="maleGender">Male</label>
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="email" id="emailAddress" class="form-control" />
                      <label class="form-label" for="emailAddress">Email</label>
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="tel" id="phoneNumber" class="form-control" />
                      <label class="form-label" for="phoneNumber">Phone Number</label>
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-12">

                    <div class="mt-4">
                      <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </React.Fragment>
  )
}

export default AddHorse
