import React from "react";
import { Spinner, Box } from "@chakra-ui/react";


const AppSpinner = () => {
    return (
        <Box
            sx={{
                flex: "1",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "30",
                zIndex: "1",
                // backgroundColor: `${colors.WHITE}`,
                opacity: "1",
            }}
        >
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translateY(-50%, -50%)"
            >
                <Spinner size='xl' color="blue" />
            </Box>
        </Box>
    );
};
export default AppSpinner;
