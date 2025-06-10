'use client';
import { useEffect, useState } from 'react';
import { Container, Title, Card } from '@mantine/core';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const response = await fetch('http://localhost:3000/companies'); // Replace with correct API if needed
        const data = await response.json();
        console.log('Fetched companies:', data);

        // Check if the response is an array
        if (Array.isArray(data)) {
          setCompanies(data);
        } else {
          console.error('Invalid companies data:', data);
          setCompanies([]); // fallback to empty array
        }
      } catch (error) {
        console.error('Error fetching companies:', error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  return (
    <Container>
      <Title order={1} mb="lg">
        Companies
      </Title>

      {loading ? (
        <p>Loading companies...</p>
      ) : companies.length === 0 ? (
        <p>No companies found.</p>
      ) : (
        companies.map((company) => (
          <Card key={company.id} shadow="sm" padding="lg" mb="sm" radius="md">
            <Title order={4}>{company.name}</Title>
            <p>{company.location || 'Location not specified'}</p>
            <p>Status: {company.isActive ? 'Active' : 'Inactive'}</p>
          </Card>
        ))
      )}
    </Container>
  );
}
