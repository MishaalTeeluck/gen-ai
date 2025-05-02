import { motion, AnimatePresence } from 'framer-motion';
import { Box, Text, VStack, Button, Icon } from '@chakra-ui/react';
import { CheckCircle } from 'lucide-react';

type Props = {
  onClickHandler: () => void;
  etaSeconds?: number;
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -30, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 20,
      delay: 0.1,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const UploadSuccessAnimation = ({
  onClickHandler,
  etaSeconds,
}: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          border='2px solid green'
          borderRadius='xl'
          p={6}
          textAlign='center'
          bg='green.50'
          boxShadow='md'
        >
          <VStack>
            <motion.div
              variants={iconVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <Icon as={CheckCircle} boxSize={12} color='green.500' />
            </motion.div>

            <motion.div
              custom={0}
              variants={textVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <Text fontSize='2xl' fontWeight='bold' color='green.700'>
                Upload Successful!
              </Text>
            </motion.div>

            <motion.div
              custom={1}
              variants={textVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <Text color='gray.600'>
                Estimated processing time: <strong>{etaSeconds}s</strong>
              </Text>
            </motion.div>

            <motion.div
              custom={2}
              variants={textVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <Text fontWeight='light' fontSize='sm' color='gray.600'>
                You’ll be notified once the test plan generation is complete.
              </Text>
            </motion.div>

            <motion.div
              custom={3}
              variants={textVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <Button colorScheme='green' onClick={onClickHandler}>
                Upload New Document
              </Button>
            </motion.div>
          </VStack>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};
