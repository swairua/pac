import { useState } from 'react';

export function useQuoteDialog(initialService?: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(initialService || '');

  const openDialog = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedService,
    openDialog,
    closeDialog,
  };
}
