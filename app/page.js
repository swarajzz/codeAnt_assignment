import { redirect } from "next/navigation";

function Home() {
  return redirect("/login");
}

export default Home;
