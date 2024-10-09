import Image from "next/image";
import ModalBackdrop from "../../../../components/modal/modal-backdrop";

function InterceptedImagePage({ params }) {
  const projectItem = params;

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/projets/${projectItem}`}
            alt={"alt"}
            width={350}
            height={350}
            className="image"
          />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;
