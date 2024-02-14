import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubwayPowerVector.module.css";

export type SubwayPowerVectorType = {
  group3?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const SubwayPowerVector: FunctionComponent<SubwayPowerVectorType> = ({
  group3,
  propAlignSelf,
  propFlexDirection,
  propFlex,
  propAlignSelf1,
}) => {
  const subwayPowerVectorStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
    };
  }, [propAlignSelf, propFlexDirection]);

  const groupVectorTerraStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf1,
    };
  }, [propFlex, propAlignSelf1]);

  return (
    <div className={styles.subwayPowerVector} style={subwayPowerVectorStyle}>
      <div className={styles.groupVectorTerra} style={groupVectorTerraStyle}>
        <h1 className={styles.ether}>Ether</h1>
        <img
          className={styles.groupVectorTerraChild}
          loading="eager"
          alt=""
          src={group3}
        />
        <h1 className={styles.rb}>rb</h1>
      </div>
    </div>
  );
};

export default SubwayPowerVector;
