import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "../api";
import { IRoomDetail, IReview } from "../types";
import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>({
    queryKey: [`room`, roomPk],
    queryFn: getRoom,
  });
  const { isLoading: isReviewsLoading, data: reviewsData } = useQuery<
    IReview[]
  >({
    queryKey: ["room", roomPk, "reviews"],
    queryFn: getRoomReviews,
  });
  return (
    <Box
      mt={10}
      py={5}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Skeleton height={"43px"} w="25%" isLoaded={!isLoading}>
        <Heading w="500px">{data?.name}</Heading>
      </Skeleton>
      <Grid
        overflow={"hidden"}
        rounded="xl"
        mt={8}
        gap={3}
        h={"60vh"}
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4,1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h="100%" w="100%">
              <Image
                objectFit={"cover"}
                w={"100%"}
                h={"100%"}
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack w={"40%"} mt={10} justifyContent={"space-between"}>
        <VStack alignItems={"flex-start"}>
          <Skeleton isLoaded={!isLoading} h={"30px"}>
            <Heading fontSize={"2xl"}>
              House hoseted by {data?.owner.name}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} h={"30px"}>
            <HStack justifyContent={"flex-start"} w={"100%"}>
              <Text>
                {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
              </Text>
              <Text>•</Text>
              <Text>
                {data?.toilets} toilet{data?.toilets === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar name={data?.owner.name} size={"xl"} src={data?.owner.avatar} />
      </HStack>
      <Box mt={10}>
        <Heading fontSize={"2xl"} mb={5}>
          <Skeleton
            w={"15%"}
            h={"35px"}
            isLoaded={!isReviewsLoading && !isLoading}
          >
            <HStack>
              <FaStar /> <Text>{data?.rating}</Text>
              <Text>•</Text>
              <Text>
                {reviewsData?.length} review
                {reviewsData?.length === 1 || 0 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </Heading>
        <Container mt={15} maxW={"container.lg"} marginX={"none"}>
          <Grid gap={10} templateColumns={"1fr 1fr"}>
            {reviewsData?.map((review, index) => (
              <VStack alignItems={"flex-start"} key={index}>
                <Skeleton h={50} isLoaded={!isReviewsLoading && !isLoading}>
                  <HStack>
                    <Avatar
                      name={review.user.name}
                      src={review.user.avatar}
                      size={"md"}
                    />
                    <VStack spacing={0} alignItems={"flex-start"}>
                      <Heading fontSize={"md"}>{review.user.name}</Heading>
                      <HStack spacing={1}>
                        <FaStar size={"12px"} />
                        <Text>{review.rating}</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                </Skeleton>
                <Skeleton
                  w={"70%"}
                  h={30}
                  isLoaded={!isReviewsLoading && !isLoading}
                >
                  <Text>{review.payload}</Text>
                </Skeleton>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
