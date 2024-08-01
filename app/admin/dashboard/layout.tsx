import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../../api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  console.log("dashboard session: ", session);
  return (
    <div>
      <div>
        <Link href={`/dashboard/user/${session?.user.id}`}>User Profile</Link>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;
