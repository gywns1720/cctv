import {Box, Heading} from "@chakra-ui/react";


interface IProps {
  text? : string
}
export function FallOutComponent({text} : IProps) {
  const defaultText = text ?? "LOADING..."
  return <Box w={"100%"} h={"100%"} color={"#2222226b"}>
    <Heading as={"h2"} size={"xl"}>
      {defaultText}
    </Heading>
  </Box>
}