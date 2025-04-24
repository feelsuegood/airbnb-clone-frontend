import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import HostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";
import { FaBed, FaDollarSign, FaToilet } from "react-icons/fa";

// pet_friendly
// kind
// owner
// --
// amenities
// category
export default function UploadRoom() {
  return (
    <ProtectedPage>
      <HostOnlyPage>
        <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
          <Container>
            <Heading textAlign={"center"}>Upload Room</Heading>
            <VStack spacing={5} as={"form"} mt={5}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input required type="text" />
                <FormHelperText>Writhe the name of your room</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>County</FormLabel>
                <Input required type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input required type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input required type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<FaDollarSign />} />
                  <Input required type="number" min={0} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Rooms</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<FaBed />} />
                  <Input required type="number" min={0} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Toilets</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<FaToilet />} />
                  <Input required type="number" min={0} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea />
              </FormControl>
              <FormControl>
                <Checkbox>Pet friendly?</Checkbox>
              </FormControl>
              <FormControl>
                <FormLabel>Kind</FormLabel>
                <Select placeholder="Choose a kind">
                  <option value="entire_place">Entire Place</option>
                  <option value="private_room">Private Room</option>
                  <option value="shared_room">Shared Room</option>
                </Select>
                <FormHelperText>
                  What kind of room are you renting?
                </FormHelperText>
              </FormControl>
            </VStack>
          </Container>
        </Box>
      </HostOnlyPage>
    </ProtectedPage>
  );
}
