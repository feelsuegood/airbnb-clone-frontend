import { Heading, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogIn } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function KakaoConfirm() {
  // get url
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confrmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      const status = await kakaoLogIn(code);
      if (status === 200) {
        toast({
          title: "Welcome",
          description: "successfully logged in",
          status: "success",
          position: "bottom-right",
        });
        // ["me"] is used in headers
        queryClient.refetchQueries({ queryKey: ["me"] });
        navigate("/");
      }
    }
  };
  useEffect(() => {
    confrmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} mt={100} spacing={3}>
      <Heading>Processing Log in...</Heading>
      <Text>Please stay 👀</Text>
      <Spinner size={"lg"} />
    </VStack>
  );
}
