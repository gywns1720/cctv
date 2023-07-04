import {ChildrenType, ReadOnlyProps} from "../../type/commonType.ts";
import {IKakaoMapCenterProps} from "./type/mapType.ts";
// @ts-ignore
import {Map} from "react-kakao-maps-sdk";


interface IProps {
  center : IKakaoMapCenterProps;
  children? : ChildrenType
}

/**
 * 카카오 맵 설정
 * @param {IKakaoMapCenterProps} center
 * @param {any} children
 * @return {JSX.Element}
 * @constructor
 */
export function KakaoMap({center, children} : ReadOnlyProps<IProps>) {
  return <Map center={center} style={{width:"100%", height:"100%"}}>
    {children}
  </Map>
}