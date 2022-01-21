import MapButton from "@components/MapButton/MapButton";
import { useContext } from "react";
import { useDisableClickPropagation } from "@utils";
import styles from "./Profile.module.css";
import { useToggle } from "react-use";
import Dialog from "@components/Dialog/Dialog";
import Spacer from "@components/Spacer/Spacer";
import { AppContext, authLogoutUri, useApi } from "@modules/api";
import Button from "@components/Button/Button";

const Profile = () => {
  const buttonRef = useDisableClickPropagation();
  const dialogRef = useDisableClickPropagation();
  const { handleLogout } = useContext(AppContext);
  const [open, toggle] = useToggle(false);
  const { user } = useContext(AppContext);
  const [{ loading }, refetch] = useApi(
    { method: "GET" },
    { manual: true }
  );

  const handleClickLogout = async () => {
    const { data } = await refetch(authLogoutUri);
    if (data && data.success) handleLogout();
  };

  return (
    <>
      <MapButton
        ref={buttonRef}
        className={styles.profileBtn}
        onClick={() => toggle(true)}
      >
        👤
      </MapButton>
      <Dialog ref={dialogRef} open={open} onClose={() => toggle(false)}>
        <Spacer y={2} />
        <div className={styles.profileHeader}>Ваш номер +{user?.phone}</div>
        <Spacer y={1} />
        <Button disabled={loading} onClick={handleClickLogout}>
          Выйти из аккаунта
        </Button>
      </Dialog>
    </>
  );
};
export default Profile;
