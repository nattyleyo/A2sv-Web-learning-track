import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import imgUrl from "../assets/cont.svg";
type FormType = {
  username: string;
  email: string;
  message: string;
};
export const ContactForm = () => {
  const form = useForm<FormType>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormType) => {
    console.log("form submitted", data);
  };

  return (
    <div className="container">
      <img src={imgUrl} alt={imgUrl} />
      <form
        className="contact-box"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1>
          Contact<span>Us.</span>
        </h1>
        <div className="input-box">
          <div className="username-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="username input"
              placeholder="@username"
              {...register("username", { required: "* username is required" })}
            />
            <p
              className="error"
              style={{
                display: errors.username?.message == null ? "none" : "flex",
              }}
            >
              {errors.username?.message}
            </p>
          </div>
          <div className="email-box">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="email"
              className="email input"
              placeholder="example@gmail.com"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "* Invalid email address",
                },
                validate: {
                  notyahoo: (filedvalue) => {
                    return (
                      !filedvalue.endsWith("hacker.com") ||
                      "* only gmail email allowed"
                    );
                  },
                },
              })}
            />
            <p
              className="error"
              style={{
                display: errors.email?.message == null ? "none" : "flex",
              }}
            >
              {errors.email?.message}
            </p>
          </div>
          <div className="textarea-box">
            <label htmlFor="message">Message</label>
            <textarea
              id=""
              className="message input"
              placeholder="write your message.."
              {...register("message", { required: "* message is required" })}
            ></textarea>
            <p
              className="error"
              style={{
                display: errors.message?.message == null ? "none" : "flex",
              }}
            >
              {errors.message?.message}
            </p>
          </div>
        </div>
        <button className="send">Send</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
