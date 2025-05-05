import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setHeaderTitle } from '../../../../store/headerSlice';
import axios from 'axios';
import { RootState } from '../../../../store';

export const UploadFileContainer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Spinner state
  const [isUploading, setIsUploading] = useState(false); 
  const [jobId, setJobId] = useState('');
  const { toolId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.header.token);

  useEffect(() => {
    dispatch(setHeaderTitle('Test Plan Generator : Upload Document'));
  }, [dispatch]);

  const handleGenerateClick = async () => {
    if (!uploadedFile) {
      toast.error('Please upload a document before proceeding.');
      return;
    }

    if (uploadedFile.size === 0) {
      toast.error('The uploaded file is empty. Please select a valid file.');
      return;
    }

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('file', uploadedFile);

      const response = await axios.post(
        `${import.meta.env.VITE_APIPORT}/jobs/${toolId!}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobId(response.data ?? '');
      setIsUploading(true); // Trigger success animation
      toast.success('File uploaded successfully! Processing started...');
    } catch {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Hide spinner
    }
  };

  const navigateToHistory = () => {
    navigate(`/tools/${toolId!}/history`);
  };

  const handleNewUpload = () => {
    setUploadedFile(null);
    setIsUploading(false);
  };

  return {
    jobId,
    navigateToHistory,
    setUploadedFile,
    handleGenerateClick,
    isUploading,
    handleNewUpload,
    isLoading
  };
};
