import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setHeaderTitle } from '../../../../store/headerSlice';
import axios from 'axios';

export const UploadFileContainer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [jobId, setJobId] = useState('');
  const { toolId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const formData = new FormData();
      formData.append('file', uploadedFile);

      const reponse = await axios.post(
        `${import.meta.env.VITE_APIPORT}/jobs/${toolId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setJobId(reponse.data ?? '');

      toast.success('File uploaded successfully! Processing started...');
    } catch {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsUploading(true);
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
  };
};
