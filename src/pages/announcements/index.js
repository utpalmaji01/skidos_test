import moment from "moment/moment";
import React, { useState } from "react";
import $ from "jquery";

const date = new Date();
const allAnnouncements = [
  {
    id: 1,
    title: "Labore commodo laborum ipsum laboris.",
    type: "Announcements",
    details:
      "Ut ad tempor tempor qui. Laborum nostrud tempor velit est anim cupidatat elit eu. Non anim sit consectetur amet deserunt cillum. Laborum magna irure veniam ex consequat velit quis qui aliqua. Nostrud incididunt Lorem duis occaecat. Magna voluptate dolor nisi enim consequat ut anim incididunt tempor nisi aliquip. Est nostrud occaecat dolore pariatur ut nostrud. Ea deserunt reprehenderit dolore nisi incididunt sit esse officia dolor excepteur sit adipisicing minim. Excepteur elit mollit non deserunt voluptate voluptate elit do adipisicing dolor fugiat ipsum labore. Ullamco exercitation qui officia et est veniam excepteur velit elit excepteur in qui occaecat. Dolore do dolor amet ea reprehenderit qui veniam irure. Et et consequat ad irure incididunt labore. Ut ad tempor tempor qui. Laborum nostrud tempor velit est anim cupidatat elit eu. Non anim sit consectetur amet deserunt cillum. Laborum magna irure veniam ex consequat velit quis qui aliqua. Nostrud incididunt Lorem duis occaecat. Magna voluptate dolor nisi enim consequat ut anim incididunt tempor nisi aliquip. Est nostrud occaecat dolore pariatur ut nostrud. Ea deserunt reprehenderit dolore nisi incididunt sit esse officia dolor excepteur sit adipisicing minim. Excepteur elit mollit non deserunt voluptate voluptate elit do adipisicing dolor fugiat ipsum labore. Ullamco exercitation qui officia et est veniam excepteur velit elit excepteur in qui occaecat. Dolore do dolor amet ea reprehenderit qui veniam irure. Et et consequat ad irure incididunt labore. Ut ad tempor tempor qui. Laborum nostrud tempor velit est anim cupidatat elit eu. Non anim sit consectetur amet deserunt cillum. Laborum magna irure veniam ex consequat velit quis qui aliqua. Nostrud incididunt Lorem duis occaecat. Magna voluptate dolor nisi enim consequat ut anim incididunt tempor nisi aliquip. Est nostrud occaecat dolore pariatur ut nostrud. Ea deserunt reprehenderit dolore nisi incididunt sit esse officia dolor excepteur sit adipisicing minim. Excepteur elit mollit non deserunt voluptate voluptate elit do adipisicing dolor fugiat ipsum labore. ",
    date: date.setDate(date.getDate() - 1),
    feedback: [""],
  },
  {
    id: 2,
    title: "Labore commodo laborum ipsum laboris.",
    type: "Announcements",
    details:
      "Et et consequat ad irure incididunt labore. Ut ad tempor tempor qui. Laborum nostrud tempor velit est anim cupidatat elit eu. Non anim sit consectetur amet deserunt cillum. Laborum magna irure veniam ex consequat velit quis qui aliqua. Nostrud incididunt Lorem duis occaecat. Magna voluptate dolor nisi enim consequat ut anim incididunt tempor nisi aliquip. Est nostrud occaecat dolore pariatur ut nostrud. Ea deserunt reprehenderit dolore nisi incididunt sit esse officia dolor excepteur sit adipisicing minim. Excepteur elit mollit non deserunt voluptate voluptate elit do adipisicing dolor fugiat ipsum labore. Ullamco exercitation qui officia et est veniam excepteur velit elit excepteur in qui occaecat. Dolore do dolor amet ea reprehenderit qui veniam irure. Et et consequat ad irure incididunt labore. Ut ad tempor tempor qui. Laborum nostrud tempor velit est anim cupidatat elit eu. Non anim sit consectetur amet deserunt cillum. Laborum magna irure veniam ex consequat velit quis qui aliqua. Nostrud incididunt Lorem duis occaecat. Magna voluptate dolor nisi enim consequat ut anim incididunt tempor nisi aliquip. Est nostrud occaecat dolore pariatur ut nostrud. Ea deserunt reprehenderit dolore nisi incididunt sit esse officia dolor excepteur sit adipisicing minim. Excepteur elit mollit non deserunt voluptate voluptate elit do adipisicing dolor fugiat ipsum labore. Ullamco exercitation qui officia et est veniam excepteur velit elit excepteur in qui occaecat. Dolore do dolor amet ea reprehenderit qui veniam irure. Et et consequat ad irure incididunt labore. Ut ad tempor tempor qui. Laborum nostrud tempor velit est anim cupidatat elit eu. Non anim sit consectetur amet deserunt cillum. Laborum magna irure veniam ex consequat velit quis qui aliqua. Nostrud incididunt Lorem duis occaecat. Magna voluptate dolor nisi enim consequat ut anim incididunt tempor nisi aliquip. Est nostrud occaecat dolore pariatur ut nostrud. Ea deserunt reprehenderit dolore nisi incididunt sit esse officia dolor excepteur sit adipisicing minim. Excepteur elit mollit non deserunt voluptate voluptate elit do adipisicing dolor fugiat ipsum labore. ",
    date: date.setDate(date.getDate() - 1),
    feedback: [""],
  },
];

const Announcements = () => {
  const [allAnnouncementsData, setAllAnnouncementsData] =
    useState(allAnnouncements);
  const [activeTab, setActivetab] = useState(1);
  const [modal, setModal] = useState(false);
  const [newAnnouncementsData, setNewAnnouncementsData] = useState({
    title: "",
    type: "Announcements",
    details: "",
    date: null,
    feedback: [""],
  });

  const handleNewAnnouncementsData = () => {
    setNewAnnouncementsData({ ...newAnnouncementsData, date: new Date() });
    console.log(newAnnouncementsData, "newAnnouncementsData");
    setAllAnnouncementsData([
      { id: allAnnouncementsData.length + 1, ...newAnnouncementsData },
      ...allAnnouncementsData,
    ]);
    setNewAnnouncementsData({
      title: "",
      type: "Announcements",
      details: "",
      date: null,
      feedback: [""],
    });
    setModal(false);
  };
  return (
    <>
      <div className="container py-4 ">
        <div className="row g-3 announcements-container ">
          <div className="col-lg-9 col-md-7 col-12">
            {allAnnouncementsData.length ? (
              <>
                {allAnnouncementsData.map((each, index) => {
                  return (
                    <div className="card mb-2" key={index}>
                      <div className="card-body">
                        <small className="form-text text-muted mb-2">
                          {moment(each?.date).format("DD/MM/YYYY, HH:MM:SS")}
                        </small>
                        <p className="font-weight-bold mb-1 font-size-18">
                          {each?.title}
                        </p>
                        <span
                          style={{ backgroundColor: "#FAE8DC" }}
                          className="p-1 border-radius-10 mb-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#FFD700"
                            className="bi bi-bell-fill mr-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                          </svg>
                          {each?.type}
                        </span>
                        <p className="my-3">{each.details}</p>
                        <span>Skidos team</span>
                        <div className="feedback-section mt-3 d-flex align-items-center justify-content-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-emoji-smile mr-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                          </svg>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Give us some Feedback"
                              aria-describedby="inputGroupPrepend2"
                            />
                            <div className="input-group-append">
                              <span className="input-group-text" role='button'>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-telegram"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="col-lg-3 col-md-5 col-12">
            <button
              className="btn btn-primary w-100"
              onClick={() => setModal(true)}
            >
              Submit an announcements
            </button>
            <div
              id="myModal"
              className="announcement-modal"
              style={{ display: modal ? "block" : "none" }}
            >
              <div
                className="announcement-modal-content modal-dialog"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Create an announcements
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setModal(false)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        className="form-control"
                        placeholder="title"
                        autoComplete="off"
                        value={newAnnouncementsData.title}
                        onChange={(e) =>
                          setNewAnnouncementsData({
                            ...newAnnouncementsData,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Type</label>
                      <select
                        className="form-control"
                        value={newAnnouncementsData.type}
                        onChange={(e) => {
                          console.log(e);
                          setNewAnnouncementsData({
                            ...newAnnouncementsData,
                            type: e.target.value,
                          });
                        }}
                      >
                        <option value="Announcements">Announcements</option>
                        <option value="Promotion">Promotion</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Description"
                        autoComplete="off"
                        rows={4}
                        value={newAnnouncementsData.details}
                        onChange={(e) =>
                          setNewAnnouncementsData({
                            ...newAnnouncementsData,
                            details: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={() => setModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleNewAnnouncementsData()}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <>
              <div
                className={`w-100 py-2 px-3 border-radius-8 my-2 d-flex align-items-center ${
                  activeTab === 1 ? "tab-active" : "tab-inactive"
                }`}
                role="button"
                onClick={() => setActivetab(1)}
              >
                <div
                  style={{
                    height: "100%",
                    width: "5px",
                    backgroundColor: "rgb(231, 242, 241)",
                  }}
                  className="border-radius-10 mr-2"
                >
                  <span className="invisible">L</span>
                </div>
                <span>ALL POSTS</span>
              </div>
              <div
                className={`w-100 py-2 px-3 border-radius-8 my-2 d-flex align-items-center ${
                  activeTab === 2 ? "tab-active" : "tab-inactive"
                }`}
                role="button"
                onClick={() => setActivetab(2)}
              >
                <div
                  style={{
                    height: "100%",
                    width: "5px",
                    backgroundColor: "rgb(231, 242, 241)",
                  }}
                  className="border-radius-10 mr-2"
                >
                  <span className="invisible">L</span>
                </div>
                <span>
                  PROMOTION{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#fad71b"
                    className="bi bi-stars ml-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                  </svg>
                </span>
              </div>
              <div
                className={`w-100 py-2 px-3 border-radius-8 my-2 d-flex align-items-center ${
                  activeTab === 3 ? "tab-active" : "tab-inactive"
                }`}
                role="button"
                onClick={() => setActivetab(3)}
              >
                <div
                  style={{
                    height: "100%",
                    width: "5px",
                    backgroundColor: "rgb(231, 242, 241)",
                  }}
                  className="border-radius-10 mr-2"
                >
                  <span className="invisible">L</span>
                </div>
                <span>
                  ANNOUNCEMENTS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FFD700"
                    className="bi bi-bell-fill ml-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </span>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
