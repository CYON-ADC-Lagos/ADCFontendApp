import React from "react";

const Controls = ({ goBack, next, start, end, handleSubmit, disable }) => {
  return (
    <div className="text-center flex justify-center md:justify-end my-[1rem]">
      <div className="flex gap-4">
        {!start && (
          <button
            className="btn w-[100px] px-[1rem] py-[.5rem] rounded-[5px] bg-green md:w-[150px] btn-primary"
            onClick={goBack}
          >
            Back
          </button>
        )}
        <button
          className="btn text-white px-[1rem] py-[.5rem] rounded-[5px] w-[150px]  bg-green disabled:bg-[#bcbcbc] disabled:text-white"
          onClick={end ? next : next}
          disabled={disable}
        >
          {end ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Controls;
