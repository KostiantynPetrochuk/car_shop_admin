import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BACKEND_URL } from "@/lib/Constants";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const response = await fetch(BACKEND_URL + `/auth/user`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${session?.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: props.params.id }),
  });
  const user = await response.json();

  return (
    <div>
      <div>User Profile</div>

      <div>
        <p>Name:</p>
        <p>{user.name}</p>
        <p>Email:</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
