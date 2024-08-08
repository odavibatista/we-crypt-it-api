import { JwtPayload } from 'jsonwebtoken'
import { JWTProviderDTO, JWTValidateDTO } from '../dtos/providers/JWTProvider.dto'

export interface JWTProviderInterface {
  generate(data: JWTProviderDTO): string
  validate(data: JWTValidateDTO): JwtPayload | string
}