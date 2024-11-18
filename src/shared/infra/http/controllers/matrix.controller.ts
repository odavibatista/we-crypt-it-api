import { Body, Controller, HttpException, Post, Req, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EncryptingService } from '../../service/encrypting-service.service';
import { UnprocessableDataException } from '../../../domain/errors/UnprocessableData.exception';
import { AllExceptionsFilterDTO } from '../../../domain/dtos/errors/AllException.filter.dto';
import { Request, Response } from 'express';
import { EncryptMatrixParamsDTO, EncryptMatrixReturnDTO } from '../../../domain/dtos/request/EncryptMatrix.request.dto';

@Controller('matrix')
@ApiTags('Matrix')
export class MatrixController {
    constructor(
        private readonly encryptingService: EncryptingService
    ) {}

    @Post('encrypt')
    @ApiResponse({
        status: new UnprocessableDataException().getStatus(),
        description: new UnprocessableDataException().message,
        type: AllExceptionsFilterDTO
    })
    async encryptMatrix(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: EncryptMatrixParamsDTO,
    ): Promise<EncryptMatrixReturnDTO | AllExceptionsFilterDTO> {
        const result = await this.encryptingService.encryptMatrix(data)

        if(result instanceof HttpException) {
            return res.status(result.getStatus()).json({
                message: result.message,
                status: result.getStatus(),
              });
        }   else    {
            return res.status(201).json(result);
        }
    }
}
