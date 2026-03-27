import axios from 'axios';
import { Package, EnquiryPayload } from '../types';

const api = axios.create({
  baseURL: '/api',
});

export const travelService = {
  getPackages: async (params?: { category?: string; featured?: boolean }) => {
    const response = await api.get<{ success: boolean; data: Package[] }>('/packages', { params });
    return response.data.data;
  },
  getPackageById: async (id: number) => {
    const response = await api.get<{ success: boolean; data: Package }>(`/packages`, { params: { id } });
    return response.data.data;
  },
  submitEnquiry: async (payload: EnquiryPayload) => {
    const response = await api.post<{ success: boolean; message: string }>('/enquiry', payload);
    return response.data;
  },
};
