import Notes from "./Notes";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

export default function HomePage() {
    return(
    <div id="homepage">
      <Notes />
      <UpdateForm />
      <CreateForm />
    </div>
    );
}