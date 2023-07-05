import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { CreateCountryDto } from 'src/dto/create-country.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { Employee, EmployeeDocument } from '../schema/employee.schema';
import { Country, CountryDocument } from 'src/schema/country.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeDocument> {
    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }
  
//   async getMasterCountry(
//     createCountryDto: CreateCountryDto,
//   ): Promise<CountryDocument> {
//     const country = new this.countryModel(createCountryDto);
//     return country.save();
//   }

  async findAll(): Promise<EmployeeDocument[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(id: string) {
    return this.employeeModel.findById(id);
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeDocument> {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  async remove(id: string) {
    return this.employeeModel.findByIdAndRemove(id);
  }
}
