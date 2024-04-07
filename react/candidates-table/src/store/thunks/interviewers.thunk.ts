import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchInterviewersService,
  patchInterviewerService,
} from '../../services/interviewers.service';

export const fetchInterviewersThunk = createAsyncThunk(
  'interviewers/fetchAll',
  async () => {
    try {
      const response = await fetchInterviewersService();
      return response;
    } catch (error) {
      return [];
    }
  }
);

export const patchInterviewerThunk = createAsyncThunk(
  'interviewers/patch',
  async ({ id, newStep }: { id: string; newStep: string }) => {
    try {
      const response = await patchInterviewerService(id, newStep);
      return {
        ...response,
        step: newStep,
      };
    } catch (error) {
      return null;
    }
  }
);
