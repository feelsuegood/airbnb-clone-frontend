import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserSecret />} />
              <Input
                variant={"filled"}
                placeholder="Name"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaEnvelope />} />
              <Input
                variant={"filled"}
                placeholder="Email"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaUserNinja />} />
              <Input
                variant={"filled"}
                placeholder="Username"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaLock />} />
              <Input
                variant={"filled"}
                placeholder="Password"
              />
            </InputGroup>
          </VStack>
          <Button
            mt={4}
            w="100%"
            colorScheme="red"
          >
            Sign up
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
