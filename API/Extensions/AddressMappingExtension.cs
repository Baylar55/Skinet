using API.DTOs.Address;
using Core.Entities;

namespace API.Extensions;

public static class AddressMappingExtension
{
    public static AddressDTO? ToDto(this Address? address)
    {
        if (address == null) return null;

        return new AddressDTO
        {
            Line1 = address.Line1,
            Line2 = address.Line2,
            City = address.City,
            State = address.State,
            Country = address.Country,
            PostalCode = address.PostalCode,
        };
    }

    public static Address ToEntity(this AddressDTO addressDTO)
    {
        if (addressDTO == null) throw new ArgumentNullException(nameof(addressDTO));

        return new Address
        {
            Line1 = addressDTO.Line1,
            Line2 = addressDTO.Line2,
            City = addressDTO.City,
            State = addressDTO.State,
            Country = addressDTO.Country,
            PostalCode = addressDTO.PostalCode,
        };
    }

    public static void UpdateFromDto(this Address address, AddressDTO addressDto)
    {
        if (addressDto == null) throw new ArgumentNullException(nameof(addressDto));
        if (address == null) throw new ArgumentNullException(nameof(address));

        address.Line1 = addressDto.Line1;
        address.Line2 = addressDto.Line2;
        address.City = addressDto.City;
        address.State = addressDto.State;
        address.Country = addressDto.Country;
        address.PostalCode = addressDto.PostalCode;
    }
}
