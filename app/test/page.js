import { BackButton } from "./components/Clients";
import styleModule from "./test.module.css";

const styles = {
  pageTest: styleModule["page-test"]
};

export default function TestPage() {
  return (
    <div className={styles.pageTest}>
      <BackButton></BackButton>
    </div>
  );
}
