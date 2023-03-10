
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Collapse,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "../navItem";



export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
          <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={onToggle}
                />
                <HStack spacing={8} alignItems={"center"}>
                  <Box>LOGO</Box>
                  <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                      <NavLink sectionTitle="Home" link={'/'}/>
                      <Box>
                          <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> Movies </MenuButton>
                            <MenuList>
                              <MenuItem><NavLink sectionTitle="Upcoming" link={'/upcoming'}/></MenuItem>
                              <MenuItem><NavLink sectionTitle="Top Rated" link={'/top_rated'}/></MenuItem>
                            </MenuList>
                          </Menu>
                      </Box>
                      <Box>
                          <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> Series </MenuButton>
                            <MenuList>
                              <MenuItem><NavLink sectionTitle="Popular Series" link={'/popular'}/></MenuItem>
                              <MenuItem><NavLink sectionTitle="Latest Tv Shows" link={'/latest'}/></MenuItem>
                            </MenuList>
                          </Menu>
                      </Box>
                  </HStack>
                </HStack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Box pb={4} display="flex" justifyContent="center">
                    <Stack as={"nav"} spacing={4} >
                      <Box display="flex" justifyContent="flex-start" marginLeft={4}>
                        <NavLink sectionTitle="Home" link={'/'}/>
                      </Box>
                      <Box>
                          <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> Movies </MenuButton>
                            <MenuList>
                              <MenuItem><NavLink sectionTitle="Upcoming" link={'/upcoming'}/></MenuItem>
                              <MenuItem><NavLink sectionTitle="Top Rated" link={'/top_rated'}/></MenuItem>
                            </MenuList>
                          </Menu>
                      </Box>
                      <Box>
                          <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> Series </MenuButton>
                            <MenuList>
                              <MenuItem><NavLink sectionTitle="Popular Series" link={'/popular'}/></MenuItem>
                              <MenuItem><NavLink sectionTitle="Latest Tv Shows" link={'/latest'}/></MenuItem>
                            </MenuList>
                          </Menu>
                      </Box>
                    </Stack>
                </Box>
            </Collapse>
          </Box>
  )
}