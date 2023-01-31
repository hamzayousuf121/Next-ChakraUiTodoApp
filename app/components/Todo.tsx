"use client"
import { Button, FormControl, Input, FormLabel, List, ListItem, ListIcon, Box, Container, Stack, Heading, Flex, Spacer } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

export default function Todo() {

    const [val, setVal] = useState<string>("")
    const [buttonVal, setButtonVal] = useState<string>("Add")

    const [todos, setTodos]: any = useState<string[]>(["Zia", "Hamza", "Zeeshan"])

    const AddTodo = () => {
        if (!!val) {
            setTodos([...todos, val])
            setVal("");
            setButtonVal("Add")
        }
    }

    let DeleteTodo = (id: number) => {
        let array: string[] = [...todos]; // make a separate copy of the array
        array.splice(id, 1);
        setTodos(array)
    }


    let UpdateTodo = (id: number, todo: string) => {
        setButtonVal("Update")
        setVal(todo)
        let array: string[] = [...todos]; // make a separate copy of the array
        array.splice(id, 1, val);
        setTodos(array)
    }
    return (
        <Container mt={100}>
            <Heading color={"green"} textAlign={"center"}>Todo Application</Heading>
            <Stack>
                <FormControl>
                    <Input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
                </FormControl>
                <Button colorScheme='green' variant='solid' size='sm' onClick={AddTodo}> {buttonVal} Todo </Button>
            </Stack>


            <List spacing={3} pt={5}>
                {todos.map((todo: string, i: number) => (
                    <ListItem key={i}>
                        <Flex>
                            <Box textTransform={"capitalize"}>
                                {todo}
                            </Box>
                            <Spacer />
                            <Box>
                                <Button colorScheme='red' variant='solid' size='sm' mx={15} onClick={() => DeleteTodo(i)}> Delete </Button>
                            </Box>
                        </Flex>
                    </ListItem>
                ))}
            </List>

        </Container>
    )
}
