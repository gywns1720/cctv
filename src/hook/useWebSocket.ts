import {useEffect, useRef, useState} from "react";

type socketSendMessageType = string | ArrayBufferLike | Blob | ArrayBufferView;
interface IProps {
  url : string; // Websocket URL
  onOpen? : () => void;
  onClose? : (error : CloseEvent) => void;
  onError? : (error : Event) => void;
  onMessage? : (evt : any) => void;
  onSendMessage? : (send : socketSendMessageType) => void;
}
export const useWebSocket = ({url, onOpen,onClose,onError,onMessage,onSendMessage} : IProps) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const ws = useRef<null | WebSocket>(null);

  useEffect(()=> {
    if(!ws.current) {
      ws.current = new WebSocket(url);
      if(ws.current !== null) {
        ws.current.onopen = () => {
          setSocketConnected(true);
          if(typeof onOpen === 'function')
            onOpen();
        }

        ws.current.onclose = (error) => {
          setSocketConnected(false);
          ws.current = null;
          if(typeof onClose === 'function')
            onClose(error);
        }

        ws.current.onerror = (error) => {
          setSocketConnected(false);
          ws.current = null;
          if(typeof onError === 'function')
            onError(error);
        }

        ws.current.onmessage = (data : any) => {
          if(typeof onMessage === 'function')
            onMessage(data);
        }
      }

    }

    // Component Close 시
    return () => {
      ws.current?.close();
    }
  }, [])

  /**
   * 데이터를 전송합니다.
   * @param {string | ArrayBufferLike | Blob | ArrayBufferView } message 보낼 데이터
   */
  const handleSendMessage = <T extends socketSendMessageType = string>(message : T) => {
    if(socketConnected && ws.current !== null) {
      ws.current.send(message);
      if(typeof onSendMessage === 'function') {
        onSendMessage(message);
      }
    }
  };

  return [socketConnected, handleSendMessage];
}