import PATCH_SRC from "../assets/icons/CoreP-low-profile-patch-in-Forest-Green-scaled-640x962.jpg"

const PatchCables = () => {
    return (
        <div className="flex">
            <div className="flex flex-col items-center">
                <div className="flex">
                    <img src={PATCH_SRC} />
                </div>
                <div className="flex items-center font-montserrat">
                    <h4>CoreP Patch Cables</h4>
                </div>
            </div>
        </div>
    )
};

export default PatchCables;