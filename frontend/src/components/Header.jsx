import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import useLogout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

const Header = () => {
	const navigate = useNavigate();
	const { user } = useAuthContext();
	const { logout } = useLogout();
	const handleLogout = () => {
		logout();
	};
	return (
		<div
			style={{
				height: "80px",
				display: "flex",
				justifyContent: "space-between",
				boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
			}}
		>
			{/* Chat app */}
			<h1 style={{ marginLeft: "50px" }}>Chat app</h1>
			{user ? (
				<div
					style={{ marginRight: "50px", display: "flex", alignItems: "center" }}
				>
					<p
						style={{
							marginRight: "20px",
							fontSize: "20px",
							fontWeight: "bolder",
						}}
					>
						{user.email.split("@")[0]}
					</p>
					<Button label="Đăng xuất" outlined onClick={handleLogout}></Button>
				</div>
			) : (
				<div
					style={{
						marginRight: "50px",
						alignContent: "center",
					}}
				>
					<Button
						label="Đăng nhập"
						outlined
						onClick={() => navigate("/login")}
						style={{ width: "150px", height: "50px", marginRight: "20px" }}
					></Button>
					<Button
						label="Đăng ký"
						outlined
						onClick={() => navigate("/signup")}
						style={{ width: "150px", height: "50px" }}
					></Button>
				</div>
			)}
		</div>
	);
};

export default Header;
