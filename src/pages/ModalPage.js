import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>Accept Invitation</Button>
    </div>
  );

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>Get matched. Go on real dates.</p>
  </Modal>

  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices ipsum tellus, a condimentum nibh posuere sit amet. Nulla at augue nunc. Sed a massa eget sapien egestas hendrerit non et dolor. Aenean vitae ligula ut massa dapibus imperdiet. Maecenas sit amet suscipit augue. Donec fermentum sapien lobortis mauris mattis, id fringilla urna blandit. Pellentesque at nisi eu justo semper congue ut condimentum massa.<br /><br />

Ut et convallis nisi, vel iaculis nunc. Duis nec vehicula dolor. Nulla maximus blandit auctor. Integer tristique imperdiet turpis sit amet finibus. Suspendisse dictum, purus et mattis ullamcorper, lorem lacus varius tellus, et elementum augue sem non elit. Mauris erat augue, gravida tristique felis pulvinar, ullamcorper rutrum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
<br />
Suspendisse consequat quam et sapien facilisis, nec tincidunt purus sodales. Vivamus iaculis tempus odio, egestas sollicitudin nunc tristique vitae. Vivamus non finibus est, quis blandit nunc. Curabitur at mi vitae diam sagittis aliquam. Pellentesque et hendrerit risus. Aenean blandit, lacus a commodo pulvinar, ante lorem elementum sem, a blandit diam ligula a nulla. Aliquam ut erat risus.</p><br />
      <Button onClick={handleClick} primary>Show Modal</Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
