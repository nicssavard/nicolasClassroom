import React, { useRef, FormEvent } from "react";
import { api } from "../../utils/api";

interface FormData {
  name: string;
  imageName: string;
  image: File | null;
}

interface Props {
  setAction: (action: string) => void;
}
export default function NewSubject({ setAction }: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const { mutate, isLoading: isPosting } =
    api.subjects.createSubject.useMutation({
      onSuccess: () => {
        console.log("success");
        setAction("list");
      },
      // onError: (e) => {
      //   const errorMessage = e.data?.zodError?.fieldErrors.content;
      //   if (errorMessage && errorMessage[0]) {
      //     toast.error(errorMessage[0]);
      //   } else {
      //     toast.error("Failed to post! Please try again later.");
      //   }
      // },
    });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current && imageRef.current) {
      const formData = new FormData();
      formData.append("name", nameRef.current.value);
      formData.append("image", imageRef.current.files?.[0] ?? "");
      formData.append("imageName", imageRef.current?.files?.[0]?.name ?? "");

      const requestData = {
        name: nameRef.current.value,
        image: formData.get("image"),
        imageName: formData.get("imageName") ?? "",
      };
      console.log(requestData);
      mutate(requestData);
    }
  };

  return (
    <div className="new-subject">
      <h1>New Subject Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={nameRef} required />
        <br />
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          ref={imageRef}
          accept="image/*"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
