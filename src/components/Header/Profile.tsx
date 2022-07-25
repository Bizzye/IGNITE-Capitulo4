import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {

  const src = '';

  return (
    <Flex align="center">
      { showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>Diego Fernandes</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            Diego Fernandes
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diego Fernandes"
        src={src}
      />
    </Flex>
  );
}